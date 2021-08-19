import { useCallback, useEffect, useState } from 'react'
import { ajax, url } from '../../api'

export enum ConfigTypeValue {
  // 热门搜索
  CONFIG_KEYWORDS = 'KEYWORDS',
  // 店铺客服二维码
  CONFIG_CUSTOMER_SERVICE_QRCODE = 'CUSTOMER_SERVICE_QRCODE',
  // 个人中心配置
  CONFIG_USER_HOME_PAGE = 'USER_HOME_PAGE',
  // 首页轮播图
  CONFIG_INDEX_PAGE_BANNER = 'INDEX_PAGE_BANNER',
  // 首页图片配置
  CONFIG_INDEX_PAGE_CORNER_ICON = 'INDEX_PAGE_CORNER_ICON',
  // 首页视频文章配置
  CONFIG_INDEX_PAGE_VIDEO = 'INDEX_PAGE_VIDEO',
  // 首页tab
  CONFIG_INDEX_PAGE_ARTICLE_TAB = 'INDEX_PAGE_ARTICLE_TAB',
  // 家庭常被用药配置
  FAMILY_DRUG = 'FAMILY_DRUG',
  // 基因报告配置
  GENE_REPORT = 'GENE_REPORT',
  // 商城首页配置
  SHOP_INDEX_PAGE_BANNER = 'SHOP_INDEX_PAGE_BANNER',
  // 商城首页文章
  SHOP_INDEX_PAGE_BANNER_ARTICLE = 'SHOP_INDEX_PAGE_BANNER_ARTICLE',
  // 专家列表页轮播图
  EXPERT_LIST_PAGE_BANNER = 'EXPERT_LIST_PAGE_BANNER',
  // 商家地址
  SHOP_ADDRESS = 'SHOP_ADDRESS',
  // 健康豆配置
  GENE_COIN_RULE = 'GENE_COIN_RULE',
  // 基本信息配置
  SHOP_INFO = 'SHOP_INFO',
}

const configDefault: {
  type_value: string
  content: any
  [propName: string]: any
} = {
  type_value: '',
  content: undefined,
}

const useConfig = (configTypeValue: ConfigTypeValue) => {
  const [config, setConfig] = useState(configDefault)
  const [loading, setLoading] = useState(false)

  const configRead = useCallback((configTypeValue: ConfigTypeValue) => {
    setLoading(true)
    ajax({
      url: url.configRead,
      data: {
        type_value: configTypeValue,
      },
    })
      .then(res => {
        const { data = {} } = res
        setConfig(data)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }, [])

  const configRefresh = useCallback(() => {
    configRead(configTypeValue)
  }, [configRead, configTypeValue])

  useEffect(() => {
    configRefresh()
  }, [configRefresh])

  const { content } = config

  return {
    content,
    loading,
    configRefresh,
  }
}

export default useConfig
