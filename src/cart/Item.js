
export default function Item({item, handleAddItemToCart }) {
    
  return (

    <div>
      <img src={item.img} id='imagencomida1' />
      <h1 id="nombrecomida1">{item.name}</h1>
      <h2 id="textodescriptivo10">{item.des}</h2>
      <h3 id="restaurante1">{item.res}</h3>
      <h3 id="calorias1">{item.cal}</h3>
      <h3 id="precio1">{item.price}</h3>
      <button id="boton1" name="button">Añadir al carrito</button>                  
    </div>


  );
}