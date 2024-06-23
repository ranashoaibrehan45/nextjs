export default function ProductDetailsLayout({children}:{
    children: React.ReactNode
}) {
    function getRandomInt(count : number) {
        return Math.floor(Math.random() * count);
    }

    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review.");
    }
    
    return (
        <>
            {children}
            <h2>Feature Product</h2>
        </>
    )
}