import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { SampleCodeSnippet } from './SampleCodeSnippet';

type Tab = 'npm' | 'pnpm' | 'yarn' | 'bun';

const defaultPackagesString =
  'material-react-table@2.13.2 @mui/material@5.16.7 @mui/x-date-pickers@7.14.0 @mui/icons-material@5.16.7 @emotion/react @emotion/styled';

export const InstallCommand = ({
  packagesString = defaultPackagesString,
  ...rest
}) => {
  const [tab, setTab] = useState<Tab>('npm');

  return (
    <>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        value={tab}
        onChange={(_e, newValue) => setTab(newValue)}
        {...rest}
      >
        <Tab label="NPM" value="npm" />
        <Tab label="PNPM" value="pnpm" />
        <Tab label="Yarn" value="yarn" sx={{ textTransform: 'none' }} />
        <Tab label="Bun" value="bun" sx={{ textTransform: 'none' }} />
      </Tabs>
      <SampleCodeSnippet
        className="language-bash"
        margin="0"
        style={{ overflowX: 'hidden' }}
        paperSxProps={{
          '& .token-line': {
            overflowX: 'auto',
          },
        }}
      >
        {tab === 'npm'
          ? `npm i ${packagesString}`
          : tab === 'pnpm'
            ? `pnpm add ${packagesString}`
            : tab === 'yarn'
              ? `yarn add ${packagesString}`
              : `bun add ${packagesString}`}
      </SampleCodeSnippet>
    </>
  );
};
