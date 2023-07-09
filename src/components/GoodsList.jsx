import {GoodsItem} from "./GoodsItem";

function GoodsList(props){
    const {
        goods = [],
        addToBasket = Function.prototype
    } = props;

    if(!goods.length){
        return <h3>Nothing here</h3>
    }

    return <div className='goods'>
        {goods.map((item) =>
            {
                //.offerId
                //.mainId
                if(item.mainId !== null){
                    // return <GoodsItem key={item.mainId} {...item} addToBasket={addToBasket} />
                    return <GoodsItem key={item.offerId} {...item} addToBasket={addToBasket} />
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
