import { rerenderEntiretree } from ".."

let state={

 product: [
    {av:1,title:"Cказачное заморское яство",name:"Нямушка с фуа-гра",portion:" 10 порций ,мышь в подарок",weidth:"0.5кг",sellT:"Чего сидишь? Порадуй Котэ,"},
{av:1,title:"Cказачное заморское яство",name:"Нямушка с рыбой",portion:" 40 порций , 2 мыши в подарок",weidth:"2кг",sellT:"Головы щучьи с чесноком да свежайшая сёмгушка."},
    {av:0,title:"Cказачное заморское яство",name:"Нямушка с курой",portion:" 100 порций , 10 мышей в подарок",weidth:"5кг",sellT:"Курочку заказывали?"}
]
}
export let R=()=>{
    rerenderEntiretree()
}



export default state

