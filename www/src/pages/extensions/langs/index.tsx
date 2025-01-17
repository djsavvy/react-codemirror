import MarkdownPreview from '@uiw/react-markdown-preview';
import data from '@uiw/codemirror-extensions-langs/README.md';
import { langNames, LanguageName, loadLanguage } from '@uiw/codemirror-extensions-langs';
import CodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../utils/useTheme';
import { PageWarpper } from '../';

const Toolbar = styled.div`
  padding-bottom: 32px;
`;

export const LangsDoc = () => {
  const { theme } = useTheme();

  const [language, setLanguage] = useState<LanguageName>('markdown');
  const [source, setSource] = useState<string>(data.source);

  useEffect(() => {
    if (language) {
      import(`code-example/txt/sample.${language.toLocaleLowerCase()}.txt`)
        .then((data) => {
          setSource(data.default);
        })
        .catch((err) => {
          setSource('');
        });
    }
  }, [language]);

  return (
    <PageWarpper>
      <CodeMirror
        value={source}
        theme={theme}
        height="300px"
        style={{ margin: '0 0 23px 0' }}
        extensions={[loadLanguage(language)!].filter(Boolean)}
      />
      <Toolbar>
        <select value={language} onChange={(evn) => setLanguage(evn.target.value as LanguageName)}>
          <option value="good">good</option>
          {langNames.sort().map((name, idx) => {
            return (
              <option key={idx} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <span>&nbsp; Total: {langNames.length}</span>
      </Toolbar>
      <MarkdownPreview source={data.source} />
    </PageWarpper>
  );
};
