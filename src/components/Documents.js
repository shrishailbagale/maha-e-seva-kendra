// src/components/Documents.js
import React, { useState } from 'react';
import Modal from './Modal';
import './Documents.css';

const documents = [
  { title: 'Age Nationality and Domicile Certificate', icon: 'document', highlight: true, requiredDocs: ['Aadhar Card','School Leaving Certificate/ Fathers Domicile Certificate/ Bonafide Certificate','Residence Proof by Gram Sevak/  Residence Proof by Talathi', ' Self-Declaration'] },
  { title: 'Income Certificate', icon: 'document', highlight: true, requiredDocs: ['Aadhar Card', 'Ration Card/ Voter ID Card','School Leaving Certificate/ Birth Certificate',' If applicant is owner of the land then 7/12 to yield 8-A Talathi report', 'Self-Declaration'] },
  { title: 'Temporary Residence Certificate', icon: 'document', highlight: false, requiredDocs: null },
  { title: 'Senior Citizen Certificate', icon: 'document' },
  { title: 'Permission for Cultural Programme', icon: 'document' },
  { title: 'Attestation of Affidavit', icon: 'document' },
  { title: 'Certificate of Residence in Hilly Area', icon: 'document' },
  { title: 'Small Land Holder Certificate', icon: 'document' },
  { title: 'Agriculturist Certificate', icon: 'document' },
  { title: 'Permission to cut any non-scheduled tree for making use of land for industrial purpose', icon: 'document' },
  { title: 'Permission for digging land (Minor mineral Extraction) for industrial purpose', icon: 'document' },
  { title: 'Solvency Certificate', icon: 'document' },
  { title: 'Caste Certificate', icon: 'document', highlight: true },
  { title: 'Landless Labour Certificate', icon: 'document' },
  { title: 'Non Creamy Layer', icon: 'document' },
  { title: 'Certified copy (Collector Office)', icon: 'document' },
  { title: 'Certified copy (Tehsildar Office)', icon: 'document' },
  { title: 'Certified copy (SDO Office)', icon: 'document' },
  { title: 'Certified Copy Record of Rights', icon: 'document' },
  { title: 'Pan Card', icon: 'document', highlight: true, requiredDocs: ['Aadhaar Card', 'Photo','Signature','Mobile No. and Email ID']},
  // Add more documents as needed
];

const Documents = () => {
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleDocumentClick = (index) => {
      setSelectedDocument(documents[index]);
    };
  
    const closeModal = () => {
      setSelectedDocument(null);
    };
  
    const filteredDocuments = documents.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="documents-container">
        <h1>Online Services and Certificates - Required Documents</h1><br/>
        <input
          type="text"
          placeholder="Search Certificates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="documents-grid">
          {filteredDocuments.map((doc, index) => (
            <div
              key={index}
              className={`document-card ${doc.highlight ? 'highlight' : ''}`}
              onClick={() => handleDocumentClick(index)}
            >
              <div className="document-icon">
                <img src={`/icons/${doc.icon}.svg`} alt={doc.title} />
              </div>
              <div className="document-title">{doc.title}</div>
            </div>
          ))}
        </div>
        {selectedDocument && (
          <Modal
            show={!!selectedDocument}
            onClose={closeModal}
            title={selectedDocument.title}
            documents={selectedDocument.requiredDocs}
          />
        )}
      </div>
    );
  };
  
  export default Documents;