import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

// tslint:disable-next-line:interface-name
interface Props {
  delayTime: number;
}

export const DelayTime: React.SFC<Props> = ({ delayTime }) => {
  return (
    <TextField
      label="Delay Time"
      value={delayTime}
      InputProps={{
        endAdornment: <InputAdornment position="end">msec.</InputAdornment>,
      }}
      disabled={true}
    />
  );
};
