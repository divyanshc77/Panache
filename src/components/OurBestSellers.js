import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { cartActions } from '../redux-state/CartState';
import '../styles/OurBestSellers.css';

const OurBestSellers = (props) => {
    const { title, price, id, image } = props;
    const dispatch = useDispatch();
    const toast = useToast();

    // Define an array of colors
    const colors = ['#819595', '#363946', '#696773', '#819595', '#363946', '#696773', '#819595', '#363946', '#696773', '#819595', '#363946', '#696773'];

    // Assign a specific color to each card based on its index
    const cardColor = colors[id % colors.length]; // Use modulo to ensure the color selection repeats if there are more cards than colors

    const addItemToCartHandler = () => {
        dispatch(
            cartActions.addItemToCart({
                id,
                price,
                title,
                image,
            })
        );

        toast({
            title: '',
            description: 'Successfully Added',
            status: 'success',
            duration: 1500,
            isClosable: true,
        });
    };

    return (
        <div>
            <div key={id}>
                <div className="cardback card w-96 bg-base-100 shadow-xl zoom" style={{ backgroundColor: cardColor }}>
                    <Link to={`/${id}`}>
                        <figure className="px-10 pt-10">
                            <img src={image} alt="Shoes" className="rounded-xl" />
                        </figure>
                    </Link>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mb-1 font-bold text-xl">{title}</h2>
                        <h2 className="text-xl mb-2 fof">${price}</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={addItemToCartHandler}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBestSellers;
