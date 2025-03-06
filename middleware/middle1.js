module.exports = (req, res, next) => {
    console.log("Middle1");
    next();
};

// module.exports = m1;

// export default function m1 (req, res, next){
//     console.log("Middle1");
//     next();
// };