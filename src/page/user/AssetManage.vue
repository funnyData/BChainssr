<template>
  <div class="assetManage mainMg" v-bind:style="{minHeight: this.$store.getters.getMinHeight}">
    <RechargeAndEnchashment ref="reEn"/>
    <div class="asset-header">
      <div>
        <div>{{$t("lang.assertManage.today")}}</div>
        <div>
          <span class="raise">+9.12%</span>
          <span>0.0122566BTC</span>
        </div>
        <div>{{$t("lang.assertManage.sumProfit")}}</div>
        <div>
          <span class="raise">+15.56%</span>
          <span>0.0122566BTC</span>
        </div>
      </div>

      <div>
         <span>1234.2454BTC</span>
         <span>~254665585.23 CNY</span>
         <span>{{$t("lang.assertManage.totalAccount")}}</span>
      </div>
    </div>

    <div class="asset-coin-list">
      <div>
        <ul>
          <li>{{$t("lang.assertManage.tradeAccount")}}</li>
          <li class="selected">火币网</li>
          <li>OKex</li>
          <li>Bit-Z</li>
          <li>CoinTiger</li>
        </ul>
      </div>

      <div>
          <div>
            <span>火币网</span>
            <span><i>{{$t("lang.assertManage.today")}}</i>934.254BTC</span>
            <span><i>{{$t("lang.assertManage.assets")}}</i>934.254BTC</span>
            <span><router-link to="financeRecord">{{$t("lang.assertManage.financialRecord")}}</router-link></span>
          </div>
          <table cellspacing="0" v-if="currList!==null">
            <tr><th></th><th>{{$t("lang.assertManage.coinName")}}</th><th>{{$t("lang.assertManage.available")}}</th><th>{{$t("lang.assertManage.frozen")}}</th><th colspan="2">{{$t("lang.assertManage.control")}}</th><th></th></tr>
            <tr  v-for="(item, index) in currList['hisUserBalanceCurrencyList']" :key="index"><td></td><td>{{item.currency}}</td><td>{{item.balance}}</td><td>236.556</td><td><a v-on:click="recharge">{{$t("lang.assertManage.deposit")}}</a></td><td><a v-on:click="enchashment">{{$t("lang.assertManage.withdraw")}}</a></td><td></td></tr>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import RechargeAndEnchashment from './model/RechargeAndEnchashment'
import * as api from '../../service/getData'
export default {
  name: 'AssetManage',
  components: {
    RechargeAndEnchashment
  },
  data () {
    return {
      currList: null
    }
  },
  created () {
    this.init()
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    recharge () {
      this.$refs.reEn.showEnRe(1)
    },
    enchashment () {
      this.$refs.reEn.showEnRe(2)
    },
    async init () {
      let data = await api.getUserAsset({hisId: 0})
      this.currList = data.data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 @import "../../style/var";
.assetManage{
  margin:30px 200px;
  background:@index_bg;
  .asset-header{
    height: 128px;
    border:1px solid  #274ca1;
    >div:nth-child(1){
      >div{
        float:left;
      }
      >div:nth-child(1),div:nth-child(3){
        margin:44px 20px 59px 76px;
      }
      >div:nth-child(2),div:nth-child(4){
        margin-top:35px;
        margin-right:128px;
        >span{
          display:block;
        }
        >span:nth-child(1){
          font-size:26px;
        }
        >span:nth-child(2){
          font-size:14px;
          color: #a9c2fd;
        }
      }
    }

    >div:nth-child(2){
      float:right;
      margin-right:90px;
      >span{
        text-align: right;
        display:block;
      }
      >span:nth-child(1){
        margin-top:22px;
        font-size: 30px;
      }
      >span:nth-child(2){
        font-size:14px;
        color: #a9c2fd;
      }
      >span:nth-child(3){
        font-size:16px;
        color: #a9c2fd;
      }
    }
  }

  .asset-coin-list{
    height:658px;
    margin-top:15px;
    display:flex;
    flex-wrap: wrap-reverse;
    >div:nth-child(1){
      background:@bg_color;
      flex:3;
      margin-right:10px;
      ul{
        li:nth-child(1){
          line-height: 90px;
        }
        li{
          line-height: 60px;
          text-align: center;
          font-size:18px;
        }
        .selected{
          background-color: #284585;
          border-left:10px solid #0087ff;
        }
      }
    }
    >div:nth-child(2){
      flex:7;
      background:@bg_color;
      overflow-y:scroll;
      >div:nth-child(1){
        margin:0px 48px;
        display:flex;
        flex-wrap: wrap-reverse;
        >span{
          flex:1;
          line-height: 90px;
          text-align: center;
        }
        >span:nth-child(4){
          cursor: pointer;
          a{
            color: #269aff;
          }
        }
      }
      table{
        width:100%;
        th{
          text-align: left;
          background:#284585;
        }
        td{
          background:#274075;
        }
        td,th{
          line-height: 60px;
          border-bottom:1px solid @index_bg;
        }
        th:nth-child(5){
          text-align: center;
        }
        td:nth-child(5),td:nth-child(6){
          text-align: center;
          color:#00eeff;
          cursor: pointer;
        }
        td:nth-child(1),th:nth-child(1){
          width:130px;
        }
        td:last-child,th:last-child{
          width:130px;
        }
      }
    }
  }
}
</style>
