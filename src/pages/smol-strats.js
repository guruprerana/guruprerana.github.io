import * as React from "react";
import Hyperlink from "../components/Hyperlink";
import SpiralPolicy from "../videos/m1-spiral-policy.mp4";
import SpiralPolicyPath from "../videos/m1-spiral-policy-path.mp4";
import Screen from "../components/Screen";

function SmolStrats() {
  return (
    <Screen className="pt-10 pb-10" title="Smol Strats">
      <div>
        <h4 className="text-secondary text-3xl hover:opacity-50">
          Programmatic Reinforcement Learning (April 2023 - August 2023)
        </h4>
        <p className="text-accent-dark pt-5 text-lg">
          Worked with{" "}
          <Hyperlink href={"https://games-automata-play.com/"}>
            Nathanaël Fijalkow
          </Hyperlink>{" "}
          at the{" "}
          <Hyperlink
            href={
              "https://www.mimuw.edu.pl/en/dziedziny-badan/teoria-automatow"
            }
          >
            automata theory group
          </Hyperlink>{" "}
          of the University of Warsaw on synthesizing programmatic policies for
          markov decision processes (MDPs) by exploiting programmatic
          representations of MDPs.
        </p>
        <div className="flex flex-row text-lg mt-1">
          <Hyperlink
            href="https://github.com/guruprerana/guruprerana.github.io/raw/source/static/popl24src.pdf"
            className="ml-1"
          >
            [PDF]
          </Hyperlink>
        </div>
      </div>
      <video controls className="mt-5">
        <source src={SpiralPolicyPath} type="video/mp4" />
      </video>
      <p className="text-accent-dark pt-5 text-lg">
        <b>Abstract. </b>Starting from a programmatic representation of a markov
        decision process (MDP) in the{" "}
        <Hyperlink
          href={
            "https://www.prismmodelchecker.org/manual/ThePRISMLanguage/Introduction"
          }
        >
          PRISM syntax
        </Hyperlink>
        , we examine the task of synthesizing a policy in the form of a program
        for the MDP. The PRISM syntax allows us to specify MDPs concisely by
        partitioning the state space into regions with similar actions and
        transitions. While we cannot address the complete expressive power of
        the PRISM syntax, we restrict ourselves to a small subclass of two
        dimensional deterministic gridworlds partitioned into regions along
        linear predicates. Using a relaxation of this class of gridworlds, we
        present an algorithm to synthesize programmatic policies which exploit
        the symmetries present in the representation of the MDP. Our programs
        use memory to track subgoals and navigate between the edges of regions
        to provide a concise representation of a policy. Our main result is a
        proof of a concrete upper bound on the size of the synthesized programs.
        We also give a practical implementation of our synthesis algorithm which
        is evaluated on randomly generated instances of gridworlds.
      </p>
      <p className="text-accent-dark pt-2 text-lg">
        A policy synthesized for a gridworld by our implementation can be
        visualized in the video below.
      </p>
      <video controls className="mt-5">
        <source src={SpiralPolicy} type="video/mp4" />
      </video>
    </Screen>
  );
}

export default SmolStrats;
