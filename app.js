import { updataInit } from './miniprogram_npm/wx-updata/index'


App({
    onLaunch() {
        Page = updataInit(Page, { debug: true })
    }
})
