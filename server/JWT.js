const {sign, verify} = require("jsonwebtoken")

//Token Creation
const createTokens = (user) => {
    const accessToken = sign(
        { username: user.username, id: user.id },
        "secretKey"
    );

    return accessToken;
}

//Token Validation
const validateToken = (req, res, next) =>{
    // const accessToken = req.cookies["access-token"]
    const accessToken =  JSON.parse(localStorage.getItem("access-token"))

    if(!accessToken){
        return res.status(400).json({error: "User not Authenticated"})
    }

    try{
        const validToken = verify(accessToken, "secretKey")
        if(validToken){
            req.authenticated = true
            return next()
        }
    }catch(err){
        return res.status(400).json({error: err})
    }

}



module.exports = {createTokens, validateToken}


// <Row gutter={[24,24]}>
//     <Col>
//         <Link to={"/"} style={{textDecoration: "none", fontSize: "25px", color: "#fff"}}>Связь</Link>
//         <Link to={"/politic"} style={{textDecoration: "none", fontSize: "25px", color: "#fff"}}>Главная</Link>
//         <Link to={"/society"} style={{textDecoration: "none", fontSize: "25px", color: "#fff"}}>Общество</Link>
//         <Link to={"/propose"} style={{textDecoration: "none", fontSize: "25px", color: "#fff"}}>Предложить</Link>
//     </Col>
// </Row>