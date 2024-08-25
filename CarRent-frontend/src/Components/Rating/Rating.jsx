import React, { useState, useEffect, useCallback } from 'react';
import { FaStar } from "react-icons/fa";
import './Rating.css';


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const Rating = (props) => {
    const [comments, setComments] = useState([]);
   
    const [formData, setFormData] = useState({
        id: props.id,
        review: {
            rating: '',
            comment: ''
        }
    });


    

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [hoverValue, setHoverValue] = useState(undefined);
   
    const handleClick = value => {
        setRating(value);
        setFormData(prevState => ({
            ...prevState,
            review: {
                ...prevState.review,
                rating: value
            }
        }));
    };
 
 

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const handleCommentChange = event => {
        setComment(event.target.value);
        setFormData(prevState => ({
            ...prevState,
            review: {
                ...prevState.review,
                comment: event.target.value
            }
        }));
    };
useCallback()
  const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4000/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log(result); 
            
            fetchComments();
            
            setComment('');
            
            
            
            
        } catch (error) {
            console.error("Failed to submit comment", error);
        }
    };
    
    const fetchComments = async () => {
        try {
          const response = await fetch("http://localhost:4000/comments");
          if (!response.ok) {
            throw new Error("Failed to fetch comments");
          }
          const data = await response.json();
          setComments(data.commentList); 
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      };
  
      
  
     
    useEffect(() => {
      
      fetchComments();
      
    }, [handleSubmit]); 
  
  
  
 

   

    
    

    return (
        <div style={styles.container}>
            <h2>How was the experience ..</h2>
            <div style={styles.stars}>
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || rating) > index ? colors.orange : colors.grey}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                    />
                ))}
            </div>
            <textarea
                placeholder="What's your experience?"
                value={comment}
                onChange={handleCommentChange}
                style={styles.textarea}
            />
            <button onClick={handleSubmit} style={styles.button}>
                Submit
            </button>

            <div>
              
{comments.map((comment) => {
    return comment.id === props.id ? comment.reviews.map((review,index) => <div key={index} style={styles.tile}>
    <div>
        {[...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                size={18}
                color={review.rating > index ? colors.orange : colors.grey}
                style={{
                    marginRight: 10,
                }}
            />
        ))}
    </div>
    <div>
        <p>{props.customername}</p>
        <p>{review.comment}</p>
    </div>
</div>) : null;
})}

            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'left',
        marginLeft: 80,
        marginTop: -90
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: '50%'
    },
    button: {
        backgroundColor: '#fe8300',
        width: '20%',
        textAlign: 'center',
        justifyContent: 'center',
        padding: '5px 15px',
        border: 'none',
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom:20
    },
    tile: {
        marginBottom: 10,
        padding: 10,
        border: '1px solid #ccc',
        borderRadius: 5,
        width:'80%'
    },
    cname:{
        marginTop:5,
        fontWeight:'bold',
        marginBottom:-5

    }
};

export default Rating;
