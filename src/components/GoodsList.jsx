import {GoodsItem} from "./GoodsItem";

function GoodsList(props){
    const { goods = [] } = props;

    if(!goods.length){
        return <h3>Nothing here</h3>
    }

    return <div className='goods'>
        {goods.map((item) =>
            {
                if(item.mainId !== null){
                    return <GoodsItem key={item.offerId} {...item} />
                }
            }

        )}

        {/*{goods.map(item => (*/}
        {/*    <GoodsItem key={item.offerId} {...item} />*/}
        {/*)*/}
        {/*)}*/}


    </div>
}

export { GoodsList }
