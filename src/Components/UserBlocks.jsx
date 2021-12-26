import React from 'react';
import './userBlocks.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UserBlocks(props) {
  return (
    <div className="user-blocks">
      {props.users.map((user, index) => {
        return (
          <Card sx={{ maxWidth: 240 }} key={index} className="userCard">
            <CardContent>
              <Typography variant="h5" component="div">
                Name: {user.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Age: {user.age}
              </Typography>
              <Typography variant="body2">
                Gender: {user.gender}
                <br />
              </Typography>
              <Typography variant="body2">
                Email: {user.mail}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                className="removeBtn"
                onClick={() => {
                  props.delUserHandle(index);
                }}
              >
                Remove
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
