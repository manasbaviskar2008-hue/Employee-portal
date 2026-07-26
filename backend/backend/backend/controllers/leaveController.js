const checkLeave = (req,res)=>{

    const {balance, days, reason}=req.body;


    if(Number(days) <= Number(balance)){

        res.json({

            status:"Eligible",

            message:"Leave request matches company policy",

            availableLeave:balance,

            requestedLeave:days,

            reason:reason,

            approvalChance:"High"

        });


    }
    else{

        res.json({

            status:"Not Eligible",

            message:"Leave balance is insufficient",

            availableLeave:balance,

            requestedLeave:days,

            suggestion:"Apply after leave balance update"

        });

    }

};


module.exports={
    checkLeave
};