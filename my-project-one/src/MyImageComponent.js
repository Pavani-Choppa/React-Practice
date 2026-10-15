import image from './images/image.png'
const MyImageComponent = () => {
    return (
        <div>
            <img src="https://img.freepik.com/premium-photo/mumbai-skyline-wadala-sewri-lalbaug_469504-3.jpg" alt="My Image" />
            <img src={image} alt="My Image" />

        </div>
    );
}

export default MyImageComponent;