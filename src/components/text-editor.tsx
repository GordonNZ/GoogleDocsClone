import { useRef, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';

export const TextEditor = () => {
  const quillRef = useRef<any>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const documentRef = doc(db, 'documents', 'sample-doc');
  const saveContent = () => {
    if (quillRef.current) {
      const content = quillRef.current.getEditor().getContents();
      console.log(`Saving content to db: ${content}`);

      setDoc(documentRef, { content: content.ops }, { merge: true })
        .then(() => {
          console.log('Content saved');
        })
        .catch(console.error);
    }
  };

  useEffect(() => {
    if (quillRef.current) {
      // Load initial content from FIrestore DB
      // Listen to Firesotre for updates and update locally in real-time
      // Listen for local text changes and save to Firestore DB
      const editor = quillRef.current.getEditor();
      editor.on('text-change', () => {
        setIsEditing(true);
        saveContent();
        //detect if user has stopped editing
        setTimeout(() => setIsEditing(false), 5000);
      });
    }
  }, []);
  return (
    <div className='google-docs-editor'>
      <ReactQuill ref={quillRef} />
    </div>
  );
};
