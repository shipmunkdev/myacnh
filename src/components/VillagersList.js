import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VillagerCard from './VillagerCard';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}));

export default function VillagersList({ villagers }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
            >
                {
                    villagers.map((villager, i) => {
                        return (
                            <Grid>
                                <VillagerCard
                                    key={i}
                                    id={villager.uniqueEntryId}
                                    name={villager.name}
                                    species={villager.species}
                                    birthday={villager.birthday}
                                    personality={villager.personality}
                                    colors={villager.colors}
                                    favoriteSaying={villager.favoriteSaying}
                                    iconImage={villager.iconImage}
                                    photoImage={villager.photoImage}
                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}
