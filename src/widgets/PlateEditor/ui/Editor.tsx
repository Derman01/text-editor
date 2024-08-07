import { Plate } from '@udecode/plate-common';
import { plugins } from '../model/plugins';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { initialValue } from '../model/initialValue';
import { useTemplateContext } from 'widgets/StyleSettings';

export function PlateEditor() {
    const { text, updateText } = useTemplateContext();
    const value = useMemo(() => {
        return text && text.length ? text : initialValue;
    }, []);

    return (
        <Plate plugins={plugins} initialValue={value} onChange={updateText}>
            <Box
                sx={{
                    backgroundColor: '#eee',
                }}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <FixedToolbar>
                    <FixedToolbarButtons />
                </FixedToolbar>
                <Box paddingBottom={'250px'}>
                    <Box
                        className="widget-page"
                        sx={{
                            background: '#fff',
                            border: '1px solid grey',
                            width: 210 + 'mm',
                            minHeight: 300 + 'mm',
                        }}
                    >
                        <Editor autoFocus />
                    </Box>
                </Box>

                {/* <FloatingToolbar>
                    <FloatingToolbarButtons />
                </FloatingToolbar> */}
            </Box>
        </Plate>
    );
}
