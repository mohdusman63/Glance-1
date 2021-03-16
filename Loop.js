let data=[
  {
  "cancel_type":"after",
  "types":"customer"
},
{
  "cancel_type":"before",
  "types":"stylist"
},
{
  "cancel_type":"after",
  "types":"stylist"
},
]
//console.log(data.length)
let insertData={}
data.forEach((element)=>
{
  //console.log(element.cancel_type,element.types)
  insertData.types=element.types
  insertData.cancel_type=element.cancel_type
  console.log(insertData)
   console.log('-----')
}
)
