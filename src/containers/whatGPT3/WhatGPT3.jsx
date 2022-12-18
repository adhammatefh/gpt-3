import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 secion__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="ChatGPT is a prototype artificial intelligence chatbot developed by OpenAI which specializes in dialogue. The chatbot is a large language model fine-tuned with both supervised and reinforcement learning techniques."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="A chatbot or chatterbot is a software application used to conduct an on-line chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent."/>
        <Feature title="Knowledgebase" text="A knowledge base is a technology used to store complex structured and unstructured information used by a computer system. The initial use of the term was in connection with expert systems, which were the first knowledge-based systems."/>
        <Feature title="Education" text="Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision."/>
      </div>
    </div>
  )
}

export default WhatGPT3