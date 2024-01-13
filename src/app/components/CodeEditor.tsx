'use client'

import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/theme-kuroir'
import 'ace-builds/src-noconflict/ext-language_tools'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export const CodeEditor = () => {

  const theme = useTheme()
  const userTheme = () => {
    if ((theme.theme === 'dark') || (theme.resolvedTheme === 'dark')) {
    return 'twilight'
    } else  return 'kuroir'
  }

  const initialData = `function onLoad(editor) {
  console.log("I've loaded!");
}`

  function onChange(newValue) {
    console.log('change =>', newValue)
  }

  return (
    <div className='flex flex-col justify-between'>
      <div className='place-self-end'> 
        <div className='w-full bg-primary p-2 rounded-t-md'>
          <h3 className='font-bold tracking-wide'>
            Solution
          </h3>
        </div>
        <AceEditor
          name='code-editor'
          mode='javascript'
          theme={userTheme()}
          width='700px'
          value={initialData}
          onChange={onChange}
          editorProps={{ $blockScrolling: true }}
          fontSize={14}
          tabSize={2}
        />
        <Button className='w-full my-4'>Full Master</Button>
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto dignissimos similique facere exercitationem dolor asperiores ducimus culpa velit quod quibusdam earum, est atque eligendi saepe, modi, totam numquam ipsa inventore? Quod eligendi libero quae sequi illum laudantium nobis cumque? Hic voluptatum ipsam numquam nesciunt, laborum expedita animi impedit quaerat quae deserunt itaque tenetur mollitia explicabo, suscipit sed quia unde nisi quis earum maxime ad porro ab tempore. Eos ex, reiciendis, doloremque laboriosam magni pariatur totam magnam officia delectus temporibus hic minima suscipit esse aliquid quibusdam impedit maiores iste? In, laudantium autem quibusdam expedita dicta modi dolore neque nulla mollitia sapiente!</p>
    </div>
  )
}
