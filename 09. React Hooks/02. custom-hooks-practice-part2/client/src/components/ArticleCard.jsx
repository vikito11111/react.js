import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard({
    _id,
    title,
}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeVgKGC9MMGYtkEoy3zKDpVHa2BPZYWmOfg&s" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Button as={Link} to={`/articles/${_id}/details`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;