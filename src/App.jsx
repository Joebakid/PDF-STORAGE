import { useState } from 'react';
import './App.css';
import { Minimize2, Maximize2 } from 'lucide-react';


function Doc({ name, href }) {
  return (
    <a className='pdf-content' href={href} target='_blank' rel="noopener noreferrer">
      {name}
    </a>
  );
}

function CourseSection({ title, docs }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='content-course-container mb'>
      <h2 className='title-course' onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
        {title}  {isOpen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
      </h2>

      {isOpen && (
        <div className='flex-pdf-content'>
          {docs.map((doc, index) => (
            <Doc key={index} name={doc.name} href={doc.href} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const mar511Docs = [
    { name: 'UNIT 1', href: 'https://drive.google.com/file/d/1PGPFE6Tbb02N80eETcFLIA53Xvwopew2/view?usp=drive_link' },
    { name: 'UNIT 2', href: 'https://drive.google.com/file/d/1XDjhGxo35AeC_yjGlLvJF74nOp1Xcsg3/view?usp=drive_link' },
    { name: 'UNIT 3', href: 'https://drive.google.com/file/d/1YrMHPnDv50M9UNnFfKd-C-c1JOkIFnD5/view?usp=drive_link' },
    { name: 'SYSTEM DESIGN AND ANALYSIS IN HYDRAULICS PNEUMATICS', href: 'https://drive.google.com/file/d/1e6zKnefwk-tWlfuSl_bWtjm8jh0bft1P/view?usp=drive_link' },
    { name: 'HYDRAULIC AND PNEUMATIC COURSE PRIMER 1', href: 'https://drive.google.com/file/d/196Cj_0U0jRfd89fXXyml-h3zUF_rcuUK/view?usp=drive_link' }
  ];

  const eee516Docs = [
    { name: 'First Part', href: 'https://drive.google.com/file/d/1DHjYmAlnzDveQ5nyxFEkKPxpJKm3vkVu/view?usp=drive_link' },
    { name: 'Amplifier 1', href: 'https://drive.google.com/file/d/1ygFSckv7MGyRxSrEel8jS7JLLQW7Uh1X/view?usp=drive_link' }
  ];

  const mar532=[
    {name:'532 Note', href:'https://drive.google.com/file/d/1oEggW6O4d2vEhJT9BbT3WBtCtYSf-PqM/view?usp=drive_link'}
  ]

  const get511=[
    {name:'511 PDF', href:'https://drive.google.com/file/d/1c7Wv9xMjSrIPMNB5zMKufO_5gHLfB1Oz/view?usp=drive_link'}
  ]

  return (
    <div className='container'>
      <header className="header">
        <h1 className="main-title">Marine Engineering Document Repository</h1>
        <p className="sub-title">Access and download course materials for Offshore</p>
      </header>

      <CourseSection title="MAR511" docs={mar511Docs} />
      <CourseSection title="EEE516" docs={eee516Docs} />
      <CourseSection title="MAR532" docs={mar532} />
      <CourseSection title="GET511" docs={get511} />
    </div>
  );
}

export default App;
