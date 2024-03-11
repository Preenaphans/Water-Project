function calWater(weight){
    let value = (weight*2.2*30/2)/1000
    return value.toFixed(1)
}

function disyplay(value)
{
    document.getElementById("result").innerHTML = "คุณควรดื่มน้ำ"+calWater(value) + "ลิตร/วัน"
}

