// Card grid shared by PainPoints and Services
export default function Cards({ items }) {
    return (
        <div className="grid">
            {items.map((item) => (
                <div className="card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}
