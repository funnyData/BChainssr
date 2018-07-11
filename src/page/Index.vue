<template>
  <div class="index mainMg">
     <section>
        <div>
          <div>
            <Banner/>
          </div>
        </div>
        <div>
           <img src="static/img/bg_shujutu.png">
          <div>
            <p>{{$t("lang.index.estimatedValue")}}</p>
            <p>2.324 BTC</p>
            <p>~123456.78 CNY</p>
            <p>{{$t("lang.index.todayProfit")}}</p>
            <p>+1.28 BTC <span class="triangle-up">+52.1%</span></p>
          </div>
        </div>
     </section>
    <section>
       <ul>
         <li v-for="item in recommend" :key="item.id" v-on:click="toDetail()">
           <p :class="item.quotes.USD['percent_change_24h']>0?'raise':'fail'">
             {{item.quotes.USD["percent_change_24h"]+"%"}}
           </p>
           <p>{{item["symbol"]}}</p>
           <p>${{item.quotes.USD["price"]}}/￥{{item.quotes.CNY["price"]}}</p>
           <p>{{$t("lang.index.turnover")}}:{{item["circulating_supply"]}} {{item["symbol"]}}</p>
           <i></i>
         </li>
       </ul>
    </section>

    <section>
      <div class="header">
        <span :class="currBaseCoin==='btc'?'selected':''" v-on:click="toChange('btc')">BTC</span>
        <span :class="currBaseCoin==='eth'?'selected':''" v-on:click="toChange('eth')">ETH</span>
        <span :class="currBaseCoin==='usdt'?'selected':''" v-on:click="toChange('usdt')">USDT</span>
        <span :class="currBaseCoin==='bitcny'?'selected':''" v-on:click="toChange('bitcny')">BitCNY</span>
        <span :class="currBaseCoin==='eos'?'selected':''" v-on:click="toChange('eos')">EOS</span>
        <span :class="currBaseCoin==='all'?'selected':''" v-on:click="toChange('all')">{{$t("lang.index.all")}}</span>
      </div>
      <div>
         <table v-show="currBaseCoin === 'all'" class="coin_list" border="0" cellpadding="0" cellspacing="0">
            <thead>
               <tr>
                 <td width="15%">{{$t("lang.index.coin")}}</td>
                 <td width="16%">{{$t("lang.index.totalValue")}} <div class="triangle"><span></span><span></span></div></td>
                 <td width="16%">{{$t("lang.index.totalAmount")}} <div class="triangle"><span></span><span></span></div></td>
                 <td width="16%">{{$t("lang.index.vol")}}(24) <div class="triangle"><span></span><span></span></div></td>
                 <td width="12%">{{$t("lang.index.change")}} <div class="triangle"><span></span><span></span></div></td>
               </tr>
            </thead>
            <tbody>
                <tr v-for="item in coinList" :key="item.id" >
                  <td>{{item["symbol"]}}</td>
                  <td>${{item.quotes.USD["market_cap"]}}</td>
                  <td>{{item.quotes.USD["volume_24h"]}}</td>
                  <td>{{item["circulating_supply"]}} {{item["symbol"]}}</td>
                  <td :class="item.quotes.USD['percent_change_24h']>0?'raise':'fail'">
                    {{item.quotes.USD["percent_change_24h"]>0?'+'+item.quotes.USD["percent_change_24h"]+"%":item.quotes.USD["percent_change_24h"] +"%"}}
                  </td>
                </tr>
            </tbody>
         </table>

        <table v-show="currBaseCoin !== 'all'" class="coin_list" border="0" cellpadding="0" cellspacing="0">
          <thead>
          <tr>
            <td width="15%">{{$t("lang.index.coin")}}</td>
            <td colspan="3" align="center">{{$t("lang.index.price")}} </td>
          </tr>
          </thead>
          <tbody>
          <tr  v-for="item in exchangeCoinList[currBaseCoin]" :key="item.id"   v-on:click="toDetail(item.symbol)">
            <td>{{item["baseCoin"].toUpperCase()}}</td>
            <td v-for="curr in item.exchangeList" v-if="curr.tick">
              <div>{{curr.tick.close + ''}}</div>
              <div :class="curr.tick.rose<0?'red':'green'">{{((curr.tick.rose)*100).toFixed(2)+ '%'}}  {{curr.name}}</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </section>
  </div>
</template>

<script>
import Tool from '../utils/Tool'
import * as api from '../service/getData'
import Banner from '../plugins/banner/Banner'
export default {
  name: 'Index',
  components: {
    Banner
  },
  data () {
    return {
      coinList: [],
      recommend: [],
      currBaseCoin: 'all',
      exchangeCoinList: {
        btc: [],
        eth: [],
        usdt: [],
        bitcny: [],
        eos: []
      }
    }
  },
  async created () {
    this.initDate()
    await this.getCointigerList()
    await this.getTokenCanList()
    await this.getAllDetail()
    console.log(this.exchangeCoinList)
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    toDetail (symbol) {
      this.$router.push('coinToCoin?symbol=' + symbol)
    },
    async getCointigerList () {
      let coinTiger = await api.getCoinTigerList()
      let temp
      let symbol
      let obj
      let exchange
      coinTiger = coinTiger.data
      for (let item in coinTiger) {
        temp = coinTiger[item]
        for (let i = 0; i < temp.length; i++) {
          symbol = temp[i].baseCurrency + temp[i].quoteCurrency
          obj = {}
          exchange = {}
          obj.symbol = symbol
          obj.baseCoin = temp[i].baseCurrency
          obj.quoteCoin = temp[i].quoteCurrency
          exchange.name = 'huobi'
          exchange.simpleyInfo = temp[i]
          obj.exchangeList = []
          obj.exchangeList.push(exchange)
         /* exchange.name = 'huobi'
          let tick = await api.getTokenCanDetail({api_key: '101311001', symbol: symbol})
          exchange.tick = tick.data.trade_ticker_data.tick
          obj.exchangeList = []
          obj.exchangeList.push(exchange)
          this.exchangeCoinList[temp[i].quoteCurrency].push(obj) */
          this.exchangeCoinList[temp[i].quoteCurrency].push(obj)
        }
      }
    },
    async getTokenCanList () {
      let tokencan = await api.getTokenCanList()
      tokencan = tokencan.data
      let temp
      let exchange
      let obj
      for (let i = 0; i < tokencan.length; i++) {
        temp = this.exchangeCoinList[tokencan[i].count_coin]
        exchange = {}
        exchange.name = 'tokencan'
        exchange.simpleInfo = tokencan[i]
        if (!this.isContain(temp, tokencan[i].symbol, exchange)) {
          obj = {}
          obj.symbol = tokencan[i].symbol
          obj.baseCoin = tokencan[i].base_coin
          obj.quoteCoin = tokencan[i].count_coin
          obj.exchangeList = []
          obj.exchangeList.push(exchange)
          this.exchangeCoinList[tokencan[i].count_coin].push(obj)
        }
      }
    },
    async getAllDetail () {
      let arr
      let exchangeList
      for (let item in this.exchangeCoinList) {
        arr = this.exchangeCoinList[item]
        for (let i = 0; i < arr.length; i++) {
          exchangeList = arr[i].exchangeList
          for (let j = 0; j < exchangeList.length; j++) {
            if (exchangeList[j].name === 'huobi') {
              let tick = await api.getCointigerDetail({api_key: '101311001', symbol: arr[i].symbol})
              exchangeList[j].tick = tick.data.trade_ticker_data.tick
            } else {
              let data = await api.getTokenCanDetail({symbol: arr[i].symbol})
              let tick = {
                close: data.data.last,
                rose: -0.03
              }
              exchangeList[j].tick = tick
            }
          }
        }
      }
    },
    isContain (arr, symbol, info) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].symbol === symbol) {
          arr[i].exchangeList.push(info)
          return true
        }
      }
      return false
    },
    async initDate () {
      let data = await api.getCoinList()
      if (data.status === 200) {
        data = data.data.data
        var coinList = []
        let recommend = []
        let num = 0
        for (let item in data) {
          num++
          if (num <= 5) {
            recommend.push(data[item])
          } else {
            coinList.push(data[item])
          }
        }
        this.coinList = coinList
        this.recommend = recommend
      }
    },
    toChange (str) {
      this.currBaseCoin = str
    },
    filter (index) {
      return index > 5
    },
    formatDate (date) {
      return Tool.formatDate2(date, '-')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "./index";
  .red{
    color:red;
  }
  .green{
    color:green
  }
</style>
