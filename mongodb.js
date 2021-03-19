
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
		
