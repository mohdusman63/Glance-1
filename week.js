addPromoCode: async (req, res) => {
        try {
            let obj = {
                "week_day": [
                    {
                        "day": "Sunday",
                        "start_time": 9,
                        "end_time": 20,
                        "booking_time": "8:01",
                        "booking_time": "8:01",
                        "time_interval": [
                            {"lap": [9, 11]},
                            {"lap": [11, 13]},
                            {"lap": [13, 15]}
                        ]
                    },
                    {
                        "day": "Monday",
                        "start_time": 11,
                        "end_time": 13,
                        "booking_time": "8:01",
                        "booking_time": "8:01",
                        "time_interval": [
                            {"lap": [9, 11]},
                            {"lap": [11, 13]},
                            {"lap": [13, 15]}
                        ]
                    }

                    ]
            }
        
            let fil=obj.week_day.filter((el)=>{
                return el.day === "Monday"
            })
            fil[0].time_interval.forEach((elelment)=>{
                let start_time = elelment.lap[0];
                let end_time = elelment.lap[1];
               console.log(typeof (start_time),end_time)

            })