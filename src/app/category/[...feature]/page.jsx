
const page = ({params}) => {
    if(params.feature.length == 3){
        return <div>{params.feature[2]}</div>
    }
    if(params.feature.length == 2){
        return <div>{params.feature[1]}</div>
    }
    if(params.feature.length == 1){
        return <div>{params.feature[0]}</div>
    }
    return (
        <div>
            
        </div>
    );
};

export default page;