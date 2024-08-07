function isValidEmail(mail) {
    const a = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return a.test(mail);
}



const SignupPost = async (req, res) => {


    console.log(req.body);
    // console.log(req.query);

    res.status(200).json({Success:true,Message:"Successfully created"})
    




}

module.exports = SignupPost;