import { Plate } from '@udecode/plate-common';
import { plugins } from '../model/plugins';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { initialValue } from '../model/initialValue';

export function PlateEditor() {
    const value = useMemo(() => {
        return JSON.parse(localStorage.getItem('initialValue') || JSON.stringify(initialValue));
    }, []);

    const onChange = (value) => {
        localStorage.setItem('initialValue', JSON.stringify(value));
        console.log(value);
    };

    return (
        <Plate plugins={plugins} initialValue={value} onChange={onChange}>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <FixedToolbar>
                    <FixedToolbarButtons />
                </FixedToolbar>
                <Box
                    sx={{
                        border: '1px solid grey',
                        height: 297 + 'mm',
                        width: 210 + 'mm',
                    }}
                >
                    <Editor autoFocus />
                </Box>
                {/* <FloatingToolbar>
                <FloatingToolbarButtons />
            </FloatingToolbar> */}
            </Box>
        </Plate>
    );
}
