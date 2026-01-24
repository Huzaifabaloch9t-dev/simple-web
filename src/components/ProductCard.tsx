type Props = {
  title: string;
  price: number;
};

export default function ProductCard({ title, price }: Props) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow">
      <img
        src="https://via.placeholder.com/300"
        className="rounded mb-4"
      />
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-indigo-600 font-bold">${price}</p>
      <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
}
