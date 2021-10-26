# Overview of the PIXL project

The general idea is to test the latest advances in deep learning (computer vision & reinforcement learning) and e-commerce to
create a more or less independent agent that can run the e-commerce store. The agent will have a Tinder-like interface where
consumers can vote and buy designs created by the agent. As the agent gets feedback, it will map out the latent space and try to
maximise likes and purchases of designs.

In total the project has 3 components:
:desktop_computer: the UI/front-end. A headless ecom front-end built on Next.JS (this repo)
:convenience_store:	the Shopify store. Serves as a kind of store back-end, providing product managment, payments etc.
:student: the Agent. The one to actually run the store. Composed of 4 subcomponents
- Desing creation. A General Adversarial Network combined with a Variational Auto Encoder
- Design evaluation. A reinforecement learning agent based on Deep Determinisitc Policy Gradient


## Preview


## Deploy your own


## How to use

