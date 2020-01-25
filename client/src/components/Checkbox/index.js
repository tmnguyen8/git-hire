import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    GitHub: true,
    SimplyHired: false,
    Indeed: false,
    Monster: false,
    USAjobs: false,
    Glassdoor: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { GitHub, SimplyHired, Indeed, Monster, USAjobs, Glassdoor} = state;
  const error = [GitHub, SimplyHired, Indeed, Monster, USAjobs, Glassdoor].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={GitHub} onChange={handleChange('GitHub')} value="GitHub" />}
            label="GitHub"
          />
          <FormControlLabel
            control={<Checkbox checked={SimplyHired} onChange={handleChange('SimplyHired')} value="SimplyHired" />}
            label="SimplyHired"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Indeed} onChange={handleChange('Indeed')} value="Indeed" />}
            label="Indeed"
          />
           <FormControlLabel
            control={
              <Checkbox checked={Monster} onChange={handleChange('Monster')} value="Monster" />}
            label="Monster"
          />
           <FormControlLabel
            control={
              <Checkbox checked={USAjobs} onChange={handleChange('USAjobs')} value="USAjobs" />}
            label="USAjobs"
          />
           <FormControlLabel
            control={
              <Checkbox checked={Glassdoor} onChange={handleChange('Glassdoor')} value="Glassdoor" />}
            label="Glassdoor"
          />
        </FormGroup>
        <FormHelperText>Select Job Outlet</FormHelperText>
      </FormControl>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={GitHub} onChange={handleChange('GitHub')} value="GitHub" />}
            label="GitHub"
          />
          <FormControlLabel
            control={<Checkbox checked={SimplyHired} onChange={handleChange('SimplyHired')} value="SimplyHired" />}
            label="SimplyHired"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Indeed} onChange={handleChange('Indeed')} value="Indeed" />}
            label="Indeed"
          />
           <FormControlLabel
            control={
              <Checkbox checked={Monster} onChange={handleChange('Monster')} value="Monster" />}
            label="Monster"
          />
           <FormControlLabel
            control={
              <Checkbox checked={USAjobs} onChange={handleChange('USAjobs')} value="USAjobs" />}
            label="USAjobs"
          />
             <FormControlLabel
            control={
              <Checkbox checked={Glassdoor} onChange={handleChange('Glassdoor')} value="Glassdoor" />}
            label="Glassdoor"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </div>
  );
}
