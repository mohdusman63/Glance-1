let data =
{
  "_id": "6083db27ddf32d4c98c6c9f5",
  "priority": true,
  "title": "What is the maximum blood alcohol content (BAC) a learner or 'P' plate driver is allowed to have when driving?",
  "image": {
    "src": "1.jpg",
    "alt": "handing over car keys when having a drink"
  },
  "answers": [
    {
      "_id": "61074d0f71977b38e6997119",
      "text": "0.00%",
      "correct": true,
      "explanation": "Alcohol slows your reaction time to hazards and this increases your risk of crashing. Your ability to spot hazards improves with experience, so an inexperienced driver should not drink any alcohol before driving."
    },
    {
      "_id": "61074d0f71977b38e699711a",
      "text": "0.02%",
      "correct": false,
      "explanation": "L and P Platers are not allowed to drink any alcohol before driving."
    },
    {
      "_id":"61074d0f71977b38e699711b",
      "text": "0.05%",
      "correct": false,
      "explanation": "L and P Platers are not allowed to drink any alcohol before driving."
    }
  ],

  "details": [
    {
      "_id": "61165f9e8bf31108a8ea4f8d",
      "question_id": "6083db27ddf32d4c98c6c9f5",
      "user_id": 3213123123.0,
      "is_correct": false,
      "answer_id": "61074d0f71977b38e699711a",
      "__v": 0
    },
    {
      "_id":"61166026d23cb51314643035",
      "question_id": "6083db27ddf32d4c98c6c9f5",
      "user_id": 3213123125.0,
      "is_correct": false,
      "answer_id": "61074d0f71977b38e699711a",
      "__v": 0
    },
    {
      "_id": "611660a1aacb24055c596d47",
      "question_id": "6083db27ddf32d4c98c6c9f5",
      "user_id": 3213123124.0,
      "is_correct": false,
      "answer_id": "61074d0f71977b38e699711b",
      "__v": 0
    }
    // {
    //   "_id": "611660c5aacb24055c596d49",
    //   "question_id": "6083db27ddf32d4c98c6c9f5",
    //   "user_id": 3213123124.0,
    //   "is_correct": true,
    //   "answer_id": "61074d0f71977b38e6997119",
    //   "__v": 0
    // }
  ]
}
 console.log('------')
 let hash_table={}
 let array=data.details
 //console.log(data.details)
 array.map((element)=>{
   if(element.answer_id){
   console.log(element.answer_id)
   if(!hash_table[element.answer_id]){
     hash_table[element.answer_id]=0
   }
   hash_table[element.answer_id]++
   
   }
 })
 console.log('------------->')
 console.log(hash_table)
 console.log('------------->>>>>')

 let answer=data.answers
// console.log(answer)
answer.map((val)=>{
  if(hash_table[val._id]){
    val.percentag=hash_table[val._id]
  }
  else{
    val.percentag=0

  }
  console.log(val)
})
console.log('------------->>>>>')







https://stackoverflow.com/questions/52708918/aggregation-lookup-with-let-is-not-working




db.getCollection('questions').aggregate([
   {$match:{"_id" : ObjectId("6083db27ddf32d4c98c6c9f5")}},
   {$lookup:{from:'attempted_questions',localField:'_id',foreignField:'question_id',as:'question'}},
   {$unwind:'$question'},
   {$group:{
       _id:'$question.question_id',
       count:{$sum:1},
       items: {
        $addToSet:{
            title:'$title',
            priority :'$priority',
            image:'$image',
            answers:'$answers',
            }},
       
       }},
       
       {$project:{
           count:1,
           items:'$items'
           
           
           }}
])
