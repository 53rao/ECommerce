function Button(props){
    return(<>
                <div className={`btn  w-full text-center flex justify-center p-4 my-3 text-2xl text-amber-50 ${props.buttonColor}`}> Add to cart</div>

    </>
    );
}
export default Button