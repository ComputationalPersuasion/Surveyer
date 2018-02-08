class Participant:
  def __init__(self, id):
    self.id = id
    self.args = []
    self.features = {}
    self.g2played = False

  def __str__(self):
    return f"[{self.id}] {self.features}"

  def header(self):
    return ['id', 'sex', 'O', 'C', 'E', 'A', 'N',
            'initbel', 'initbelgov', 'postbel', 'postbelgov',
            'messages', 'additional']

  def to_arr(self):
    return [self.id, self.features['sex'],
            self.features['O'], self.features['C'], self.features['E'], self.features['A'], self.features['N'],
            self.features['initbel'], self.features['initbelgov'],
            self.features['postbel'], self.features['postbelgov']] + self.args + [repr(self.features['additionalarg'])]
