const style = [Jazz, Blues]

style[style.length] = 'Rock-n-Roll'

style[1] = 'Classic'

delete style[0]

console.log(style.length) //จะยังเหลือ 3 เพราะตัวที่ถูกลบจะเป็นค่าว่าง ไม่ควรใช้ แนะนำให้ใช้ splice ในการ remove แทน