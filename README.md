# Overview of the PIXL project

The general idea is to test the latest advances in deep learning (computer vision & reinforcement learning) and e-commerce to
create a more or less independent agent that can run the e-commerce store. The agent will have a Tinder-like interface where
consumers can vote and buy designs created by the agent. As the agent gets feedback, it will map out the latent space and try to
maximise likes and purchases of designs.

In total the project has 3 components:\
:desktop_computer: &nbsp;&nbsp;&nbsp; the UI/front-end. A headless ecom front-end built on Next.JS (this repo)\
:convenience_store: &nbsp;&nbsp;&nbsp; the Shopify store. Serves as a kind of store back-end, providing product managment, payments etc.\
:student: &nbsp;&nbsp;&nbsp; the Agent. The one to actually run the store. Composed of 2 subcomponents:
- Desing creation. A General Adversarial Network combined with a Variational Auto Encoder (a draft of a GAN API-endpoint this can be found in this [repo](https://github.com/ErikKaum/pixlrest/) and a draft of the ProGAN can be found in this [repo](https://github.com/ErikKaum/progressive-gan)).
- Design evaluation. A reinforecement learning agent based on Deep Determinisitc Policy Gradient


## Graphical illustration of the architecture
The image provides a overview of the planned architecture, its components and how they interact with each other.
It's meant as a diagram to support planning and will most likely change in the future. Also, it serves as a guideline and many non-trivial details are still not implemented.

![diagram](./diagram.svg)
