/* eslint-disable react/prop-types */
export default function Cardcomponent({
  img,
  heading,
  title,
  price,
  discount,
}) {
  return (
    <div className="card">
      <img src={img} className="logo" alt="Vite logo" />
      <h1> {heading}</h1>
      <p>{title}</p>
      <div>
        {discount < price ? (
          <p>
            {" "}
            <del>{price}</del> {discount}
          </p>
        ) : (
          <p>{price}</p>
        )}{" "}
      </div>
    </div>
  );
}
