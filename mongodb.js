
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