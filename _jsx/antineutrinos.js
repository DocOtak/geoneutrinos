import {
  NEUTRON_REST_MASS,
  PROTON_REST_MASS,
  ELECTRON_REST_MASS,
} from './config'


/**
 * Calculate the number of antineutrinos per fision
 */
function λ(Ev, ...c){
  const params = c.map((cv, i) => cv * Math.pow(Ev, i));
  return Math.exp(params.reduce((sum, value) => sum + value, 0));
}

function σ(Ev){ // Neutrino energy in MeV

  const Ee = Math.max(ELECTRON_REST_MASS, Ev - (NEUTRON_REST_MASS - PROTON_REST_MASS))

  return 9.62e-44 * Math.sqrt((Ee * Ee) - (ELECTRON_REST_MASS * ELECTRON_REST_MASS)) * Ee;
}

function R(Ev, Qi, ...c){
  return λ(Ev, ...c) * (1/Qi) * (σ(Ev)/(4 * Math.PI))
}

export { λ, σ, R};
