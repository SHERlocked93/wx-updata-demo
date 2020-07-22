import { Empty } from '../miniprogram_npm/wx-updata/index'

const app = getApp()

Page({
    data: {
        name: '蜡笔小新',
        info: { height: 140, color: '黄色' },
        desc: [{ age: 8 }, '靓仔'],
        family: [{ num: 4 }, '四口之家', [{ dad: '野原广治' }, { mum: '美伢' }, { son: '蜡笔小新' }, { dog: '小白', color: '白色' }]]
    },
    onLoad() {},

    /**
     * 五年后
     */
    timeFastForward() {
        // noinspection JSConsecutiveCommasInArrayLiteral
        this.upData({
            info: { height: 155 },
            desc: [{ age: 13 }, '帅哥'],
            family: [Empty, Empty, [Empty, Empty, Empty, { color: '灰色' }]]
        })
    },

    /**
     * 生成随机数
     * @param start
     * @param span
     * @return {number}
     */
    randomNum(start = 0, span = 10) {
        return Math.round(Math.random() * (span + 1)) + start
    },

    /**
     * 随机穿梭
     */
    timeRandom() {
        // noinspection JSConsecutiveCommasInArrayLiteral
        this.upData({
            info: { height: this.randomNum(100, 70) },
            desc: [{ age: this.randomNum(0, 50) },
                ['帅哥', '靓仔', '衰仔', '婴儿', '油腻大叔'][this.randomNum(0, 4)]],
            family: [, ['四口之家', '快乐之家', '幸福之家'][this.randomNum(0, 2)], [, , , {
                color:
                  ['灰色', '白色', '黑色', '蓝色', '红色'][this.randomNum(0, 4)]
            }]]
        })
    }

})
