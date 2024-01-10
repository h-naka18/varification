export default {
  'func': {
    'tax': {
      'caption': '入力した金額から消費税(10%)価格を計算します。',
      'function': '(...param)=> {return Math.floor(param[0] * 1.1)}'
    },
    'tax2': {
      'caption': '入力した金額から軽減税率(8%)による税込価格を計算します。',
      'function': '(...param)=> {return Math.floor(param[0] * 1.08)}'
    },
    'total': {
      'caption': '10,20,30...というようにカンマで区切った数字の合計を計算します。',
      'function': `(...param)=> {
        let re = 0
        let p = param[0]
        for (let i in p) {
          console.log(i)
          console.log(p[i])
          re += p[i] * 1
        }
        return re
      }`
    },
    'factorial': {
      'caption': 'ゼロから入力値までの合計を計算します。',
      'function': `(...param)=> {
        let re = 0
        for (let i = 0; i <= param[0]; i++) {
          re += i
          console.log(re)
        }
        return re
      }`
    },
  }
}