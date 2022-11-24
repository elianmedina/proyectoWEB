
export const CartItem = ({ item, handleAddItemToCart, handleRemoveItemFromCart }) => {
    return(
        <aside>
      <div className="itemCart">
        <div>
          <h3>{item.title}</h3>
          <div className="itemInfo">
            <p>Precio: ${item.price}</p>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
          </div>
          <div className="buttons">
            <button onClick={ () => handleRemoveItemFromCart(item.id)} size="small" disableElevation variant="contained">
              -
            </button>
            <p> {item.amount}</p>
            <button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => handleAddItemToCart(item)}>
              +
            </button>
          </div>
        </div>
        <img src={item.image} />
      </div>
    </aside>
    )
}