import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { blue } from '@material-ui/core/colors';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import zodiacSign from 'get-zodiac-sign';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        padding: '0 15px',
        margin: '20px 5px',
    },
    media: {
        height: 0,
        paddingTop: '90%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[50],
    },
}));

export default function VillagerCard({ id, name, species, birthday, personality, colors, favoriteSaying, iconImage, photoImage }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const birthday_mmdd = birthday.split("/");
    const birthday_month = Number(birthday_mmdd[0]);
    const birthday_day = Number(birthday_mmdd[1]);
    const zodiac = zodiacSign(birthday_month, birthday_day);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card key={id} className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} alt={`${name} avartar icon`} src={iconImage} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={name}
                subheader={`${personality} Personality`}
            />

            <CardMedia
                className={classes.media}
                image={photoImage}
                title={`${name} portrait photo`}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`“${favoriteSaying}”`}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="Redirects to Fandom Wiki" target='_blank' rel="noopener noreferrer" href={`https://animalcrossing.fandom.com/wiki/${name}`}>
                    <AccountCircle />
                    <Typography component="div">
                        <Box fontSize="fontSize" m={1}>
                            View details on Fandom
                        </Box>
                    </Typography>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        <b>Attributes</b>
                    </Typography>
                    <Typography paragraph>
                        <b>Type: </b> {species}
                    </Typography>
                    <Typography paragraph>
                        <b>Birthdate: </b> {monthNames[birthday_month - 1]} {birthday_day}
                    </Typography>
                    <Typography paragraph>
                        <b>Zodiac Sign: </b> {zodiac}
                    </Typography>
                    <Typography paragraph>
                        <b>Favorite Colors: </b> {colors[0]} & {colors[1]}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
