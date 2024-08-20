function GifContainer({ gifs }) {
    return (
        <ul>
            {
                gifs.map((gif) => {
                    return <li key={gif.id}>
                        <img src={gif.images.original.url} alt="" />
                    </li>
                })
            }
        </ul>
    )
}

export default GifContainer
