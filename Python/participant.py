class Participant:
  def __init__(self, id):
    self.id = id
    self.args = []
    self.features = {}

  def __str__(self):
    return f"[{self.id}] {self.features}"

  def to_arr(self):
    return [self.id] + list(self.features.values()) + self.args
