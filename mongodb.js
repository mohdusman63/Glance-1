
 db.demo396.aggregate([
    { "$lookup": {
       "from": "demo395",
       "let": { "details": "$details" },
       "pipeline": [
          { "$match": { "$expr": { "$in": [ "$_id", "$$details" ] } } }
       ],
       "as": "output"
    }}
 ])

  or
  db.demo396.aggregate([
    {$unwind:"$product"},
       {lookup:{from :" ",locaiField:"product" ,foreignField:"",as:""}}
    }}
 ])





######################################glance###########################################
  1-->db.getCollection('services').aggregate([
            {
                "$lookup": {
                    from: "categories",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "categoryDetails"
                }},
             {
                 $match: matchVal
             },
             {
                 $sort: {
                     [sortField]: sortOrder
                 }            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: 1              //count the total document 
                    },
                    results: {
                        $push: '$$ROOT'
                    }
                }
            },
            {
                $project: {
                    total: 1,
                    results: {
                        // [previous_result, skip_page,limit]  (limit * (page - 1)), limit
                        $slice: ['$results', (limit * (page - 1)), limit]
                    }
                }
            },
        ])


update all field like is_default:0
db.getCollection('companies').updateOne({ poster_id:ObjectId('6078181304f20b301ce6401b')},
   { $set: {"location.$[].is_default" : false} }

  )

//how to get nested data
db.getCollection('companies').find({'poster_id': ObjectId("6078181304f20b301ce6401b"),
    'founder_team._id':ObjectId('607d65bd10a1571164438e85')},
    {'founder_team.$': 1 , '_id':0}

)

//how to update nested object
 ScoreCard.updateOne(
        { match_id: req.body.match_id },
        {
          $push: {
            batsman: {
              player_id: req.body.player_id,
              four: req.body.four,
              six: req.body.six,
              played_ball: req.body.played_ball,
            },
          },
        }
      )

//to check nested element exist 
 let get = await ScoreCard.findOne(
        { match_id: req.body.match_id },
        {
          batsman: {
            $elemMatch: {
              player_id: mongoose.Types.ObjectId(req.body.player_id),
            },
          },
        }
      );

//delete nested object
   let u = await ScoreCard.updateOne(
          { match_id: req.body.match_id },
          {
            $pull: {
              batsman: {
                player_id: req.body.player_id,
              },
            },
          }
        );

//insert many element 
             data.map((element) => {
                    let insertData = {}
                    count++
                    insertData.service_type = element.service_type
                    insertData.elapsed_time = element.elapsed_time ? element.elapsed_time : null
                    arr.push(insertData)
               })
           // console.log(arr)
            CancellationRuleModel.insertMany(arr)


await PostJobModel.aggregate([
                    {$match: searchCriteria},
                    {
                        $group: {
                            _id: '$_id',
                            'jobs': {'$push': '$$ROOT'}
                        }
                    },

                    {
                        $lookup: {
                            from: 'companies',
                            localField: 'jobs.company_id',
                            foreignField: '_id',
                            as: 'company_details'
                        }
                    },
                    {$match: company_filter},
                    {
                        $lookup: {
                            from: 'job_locations',
                            localField: '_id',
                            foreignField: 'job_id',
                            as: 'address_details'
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            jobs: 1,
                            address_details: '$address_details',
                            company_details: '$company_details'

                        }
                    },
                    {$sort: {created_at: -1}},
                    {$skip: skip},
                    {$limit: resPerPage},


                ])
